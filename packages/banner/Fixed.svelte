{#if fixed}
  <div
    bind:this={element}
    use:forwardEvents
    class="mdc-banner__fixed"
    style={width == null ? undefined : `width: ${width}px;`}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let fixed = false;
  export let width: number | undefined = undefined;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
