const API = "https://pinjasaur-cuetip.web.val.run"

const vars = {
  "namespace": {
    type: "string",
    desc: "Sets the <code>[data-*]</code> attribute that holds the tooltip.",
    value: "tooltip"
  },
  "class-prefix": {
    type: "string",
    desc: "Sets the <code>class</code> prefix.",
    value: "tooltip--"
  },
  "no-tail": {
    type: "string",
    desc: "Sets the <code>class</code> used to disable a tooltip tail.",
    value: "no-tail"
  },
  "default-position": {
    type: "string", // TODO: restrict to TRBL keywords
    desc: "Sets the default tooltip <code>position</code> (top, right, bottom, or left).",
    value: "top"
  },

  "has-tail": {
    type: "boolean",
    desc: "Sets whether the tooltip has a tail (e.g. small triangle).",
    value: true
  },
  "cursor": {
    type: "keyword", // TODO: restrict to cursor keywords
    desc: "Sets the <code>cursor</code> value.",
    value: "inherit"
  },
  "z-index": {
    type: "number",
    desc: "Sets the <code>z-index</code> value.",
    value: 9999
  },

  "color-foreground": {
    type: "color", // TODO: restrict to colors
    desc: "Sets the foreground color (e.g. <code>color</code>) value.",
    value: "#fff"
  },
  "color-background": {
    type: "color", // TODO: restrict to colors
    desc: "Sets the background color (e.g. <code>background-color</code>) value.",
    value: "#000"
  },
  "padding": {
    type: "units", // TODO: restrict to units
    desc: "Sets the <code>padding</code>.",
    value: ".25em"
  },
  "border-radius": {
    type: "units", // TODO: restrict to units
    desc: "Sets the <code>border-radius</code>.",
    value: ".1em"
  },

  "tail-size": {
    type: "units", // TODO: restrict to units
    desc: "Sets the size of the tooltip tail. <code>$cuetip-has-tail</code> must be true.",
    value: ".25em"
  },
  "offset": {
    type: "units", // TODO: restrict to units
    desc: "Sets the offset of the tooltip from its element.",
    value: ".2em"
  }
}

Vue.use(Toasted)

const vm = new Vue({
  el: "#app",
  data: {
    vars,
    generating: false,
    build: "",
    error: ""
  },
  methods: {
    generate () {

      const vars = {}
      for (const key in this.vars)
        vars[key] = {
          value: this.vars[key].value,
          type: this.vars[key].type
        }

      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vars })
      }

      this.error = ""
      this.generating = true
      const vm = this
      fetch(API, opts)
        .then(res => res.json())
        .then(res => {
          vm.generating = false
          if (res.error)
            vm.error = res.error
          else
            vm.build = res.css
        })
        .catch(err => {
          vm.generating = false
          vm.error = err.message
        })
    },

    copySuccess () {

      this.$toasted.show("Copied!", {
        duration: 2000,
        type: "success"
      })
    },

    copyError () {

      this.$toasted.show("Unable to copy.", {
        duration: 2000,
        type: "error"
      })
    }
  }
})
