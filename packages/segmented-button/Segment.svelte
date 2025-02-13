<button
  bind:this={element}
  use:Ripple={{
    ripple,
    unbounded: false,
    addClass,
    removeClass,
    addStyle,
  }}
  use:forwardEvents
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-segmented-button__segment': true,
    'mdc-segmented-button__segment--touch': touch,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role={singleSelect ? 'radio' : undefined}
  aria-pressed={!singleSelect ? (selected ? 'true' : 'false') : undefined}
  aria-checked={singleSelect ? (selected ? 'true' : 'false') : undefined}
  on:click={(event) =>
    !event.defaultPrevented && instance && instance.handleClick()}
  {...internalAttrs}
  {...$$restProps}
  >{#if ripple}<div class="mdc-segmented-button__ripple" />{/if}<slot
  />{#if touch}<div class="mdc-segmented-button__segment__touch" />{/if}</button
>

<script lang="ts">
  import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment/foundation.js';
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import Ripple from '@smui/ripple';

  import type { SMUISegmentedButtonSegmentAccessor } from './Segment.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let segmentId: any;
  export { segmentId as segment };
  export let ripple = true;
  export let touch = false;

  let element: HTMLButtonElement;
  let instance: MDCSegmentedButtonSegmentFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  const initialSelectedStore = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:segment:initialSelected'
  );
  let selected = $initialSelectedStore;
  const singleSelect = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:singleSelect'
  );
  const index = getContext<SvelteStore<number>>(
    'SMUI:segmented-button:segment:index'
  );

  if (!segmentId) {
    throw new Error(
      'The segment property is required! It should be passed down from the SegmentedButton to the Segment.'
    );
  }

  $: if (instance && instance.isSelected() && !selected) {
    instance.setUnselected();
  }

  $: if (instance && !instance.isSelected() && selected) {
    instance.setSelected();
  }

  onMount(() => {
    instance = new MDCSegmentedButtonSegmentFoundation({
      isSingleSelect: () => {
        return $singleSelect;
      },
      getAttr,
      setAttr: addAttr,
      addClass,
      removeClass,
      hasClass,
      notifySelectedChange: (value) => {
        selected = value;

        dispatch(getElement(), 'selected', {
          index: $index,
          selected,
          segmentId,
        });
      },
      getRootBoundingClientRect: () => {
        return getElement().getBoundingClientRect();
      },
    });

    const accessor: SMUISegmentedButtonSegmentAccessor = {
      segmentId,
      get selected() {
        return selected;
      },
      set selected(value) {
        if (selected !== value) {
          selected = value;
        }
      },
    };

    dispatch(getElement(), 'SMUISegmentedButtonSegment:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUISegmentedButtonSegment:unmount', accessor);

      instance.destroy();
    };
  });

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
