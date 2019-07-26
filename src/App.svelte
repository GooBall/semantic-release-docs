<script>
  import { fade } from "svelte/transition";
  import RadioOption from "./RadioOption.svelte";
  import { type, scope, commit } from "./store";

  const types = [
    { type: "feat", label: "Feature" },
    { type: "fix", label: "Fix" },
    { type: "perf", label: "Performance" },
    { type: "docs", label: "Documentation" },
    { type: "style", label: "Styling" },
    { type: "refactor", label: "Refactor" },
    { type: "test", label: "Tests" },
    { type: "build", label: "Build" },
    { type: "ci", label: "CI" },
    { type: "chore", label: "Chore" }
  ];

  const commitScope = $scope && `(${$scope})`;
</script>

<style>
  .tag-bg {
    background-image: linear-gradient(45deg, #312a6c, #852d91);
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tag {
    color: #fff;
    font-family: monospace;
    font-size: 3rem;
  }
  .content-bg {
    background-color: #fff;
    /* background-color: #00171f; */
  }
  .content {
    color: #333;
    padding: 20px;
    max-width: 1040px;
    margin: 0 auto;
  }
  :global(body) {
    padding: 0;
    height: 100vh;
  }
  :global(*, *:before, *:after) {
    box-sizing: border-box;
  }
  .questions {
    display: grid;
    grid-template-columns: repeat(5, 25fr);
    grid-template-rows: auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    list-style: none;
  }
  article {
    margin-bottom: 20px;
  }
</style>

<div class="tag-bg">
  <h1 class="tag" transition:fade>{`${$type}${commitScope}: ${$commit}`}</h1>
</div>

<div class="content-bg">
  <div class="content">

    <article>
      <h2>This commit is a ...</h2>
      <ui class="questions">
        {#each types as { type, label }}
          <RadioOption value={type} {label} />
        {/each}
      </ui>
    </article>
    <article>
      <h2>What is the scope?</h2>
      <p>Leave blank if you don't need this</p>
      <input bind:value={$scope} placeholder="aka 'User Admin'" />
    </article>
    <article>
      <h2>What is the change?</h2>
      <p>Keep is short and sweet!</p>
      <input
        bind:value={$commit}
        placeholder="Add state fallback is user does not exist" />
    </article>
  </div>
</div>
