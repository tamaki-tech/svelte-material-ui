<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-layout-grid__inner': true,
  })}
>
  <slot />
</div>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    ActionArray,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
