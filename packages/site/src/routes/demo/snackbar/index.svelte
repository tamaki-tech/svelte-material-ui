<svelte:head>
  <title>Snackbars - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbars</h2>

  <pre class="demo-spaced">npm i -D @smui/snackbar</pre>

  <Demo component={Simple} file="snackbar/_Simple.svelte" />

  <Demo component={LeadingWithAction} file="snackbar/_LeadingWithAction.svelte">
    Leading with action
  </Demo>

  <Demo component={StackedWithAction} file="snackbar/_StackedWithAction.svelte">
    Stacked with action
  </Demo>

  <Demo component={DynamicText} file="snackbar/_DynamicText.svelte">
    Using dynamic text
  </Demo>

  <Demo component={Kitchen} file="snackbar/_Kitchen.svelte">
    The "Kitchen" Snackbar generator
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import LeadingWithAction from './_LeadingWithAction.svelte';
  import StackedWithAction from './_StackedWithAction.svelte';
  import DynamicText from './_DynamicText.svelte';
  import Kitchen from './_Kitchen.svelte';
</script>
