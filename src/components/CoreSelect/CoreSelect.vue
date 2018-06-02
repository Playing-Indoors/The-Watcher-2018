<template>
  <div>
    <label v-if="label" class="block pb-1 span-6 text-xs">{{label}}</label>
    <div class="relative">
      <select
        :required="required"
        :disabled="disabled"
        :autofocus="autofocus"
        :value="selectValue"
        :multiple="multiple"
        class="appearance-none block bg-grey-dark shadow text-white py-4 px-4 w-full"
        @change="updateValue($event.target.value)"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      >
        <option
          v-if="placeholder"
          :value="null"
        >{{placeholder}}</option>
        <slot
          v-for="item in options"
          :data="item"
        >
          <option
            :key="getKey(item)"
            :value="getKey(item)"
          >{{getText(item)}}</option>
        </slot>
      </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-darker">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ''
		},
		// Tracks the value
		value: {
			type: [String, Number, Object, Boolean],
			default: null
		},
		// Populates our select list
		options: {
			type: Array,
			required: true
		},
		multiple: {
			type: Boolean,
			default: false
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		// #region Object Props
		// Instead of emitting the key, emits the entire object
		trackObject: {
			type: Boolean,
			default: false
		},
		// Specifies the key value. Required if options is object
		optionKey: {
			type: String,
			default: ''
		},
		// Specifies the object key value to show the text
		optionText: {
			type: String,
			default: ''
		}
		// #endregion
	},
	computed: {
		// Allows us to support the trackObject prop
		selectValue() {
			// Extracts the key if we use trackObject
			if (this.trackObject && this.value) {
				const key = this.getKey(this.value);
				return key;
			}
			return this.value;
		}
	},
	created() {
		this.innerValue = this.value;
		if (
			this.options.length > 0 &&
			typeof this.options[0] === 'object' &&
			!this.optionKey
		) {
			console.warn(
				'No key was specified in core-select. Please supply an `optionKey` prop!',
				this.options
			);
		}
	},
	methods: {
		updateValue(value) {
			// If we track by object emit an object instead
			if (this.trackObject) {
				const findOption = this.options.find(
					// The value coming in is a string for all ids.
					// This means we can't compare a Number to a string (so ==)
					// eslint-disable-next-line
					option => this.getKey(option) == value
				);
				this.$emit('input', findOption);
			} else {
				this.$emit('input', value);
			}
		},
		// Let's get the key value.
		getKey(option) {
			const type = typeof option;
			if (type === 'object') {
				if (this.optionKey) {
					return option[this.optionKey];
				}
				// ideally you should always pass an option key
				// but if not I got your back.
				// Not recommended but at least it shouldn't 💥
				return option[Object.keys(option)[0]];
			}
			return option;
		},
		// Let's get the text of the option
		getText(option) {
			// Alternatively, pass a slot-scope to command this. See docs at the top for a template.
			const type = typeof option;
			if (type === 'object') {
				// If you don't specify a text key, we will try the option key
				if (this.optionText) {
					return option[this.optionText];
				} else if (this.optionKey) {
					return option[this.optionKey];
				}
				// ideally you should always pass an option key
				// but if not I got your back.
				// Not recommended but at least it shouldn't 💥
				return option[Object.keys(option)[0]];
			}
			return option;
		}
	}
};
</script>
