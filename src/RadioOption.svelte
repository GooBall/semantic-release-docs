<script>
  import { type } from "./store";
  export let value;
  export let label = "A new feature";
</script>

<style>
  .option {
    font-size: 22px;
  }

  label {
    border: 4px solid;
    border-image-source: linear-gradient(45deg, #312a6c, #852d91);
    border-image-slice: 1;
    display: block;
    padding: 12px;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label:hover,
  label:focus,
  label:active {
    background: linear-gradient(45deg, #312a6c, #852d91);
    transition: all 0.2s ease-in-out;
    color: #fff;
  }

  label:hover > svg,
  label:focus > svg,
  label:active > svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }

  input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .active {
    background: linear-gradient(45deg, #312a6c, #852d91);
    opacity: 1;
    color: #fff;
  }

  .active > svg {
    fill: #fff;
  }

  .icon {
    width: 60%;
  }
</style>

<li class="option">
  <label class={value === $type && 'active'}>
    <input type="radio" bind:group={$type} {value} />
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 20 25"
      enable-background="new 0 0 20 20"
      xml:space="preserve">
      <path
        d="M20,13v-2h-3.1c-0.1-0.7-0.2-1.4-0.5-2h2.1l1.3-2.6l-1.8-0.9L17.4,7h-1.9c-0.2-0.3-0.4-0.6-0.7-0.8
        C14.9,5.8,15,5.4,15,5c0-0.6-0.1-1.1-0.3-1.7L17,1.6L15.8,0l-2.1,1.6C12.7,0.6,11.4,0,10,0C8.6,0,7.3,0.6,6.4,1.6L4.2,0L3,1.6
        l2.3,1.7C5.1,3.9,5,4.4,5,5c0,0.4,0.1,0.8,0.2,1.2C5,6.4,4.8,6.7,4.6,7H2.6L1.9,5.6L0.1,6.4L1.4,9h2.1c-0.2,0.6-0.4,1.3-0.5,2H0v2
        h3.1c0.1,0.7,0.2,1.4,0.5,2H1.3L0,17.6l1.8,0.9L2.5,17h2c1.3,1.8,3.3,3,5.5,3s4.2-1.2,5.5-3h2l0.7,1.4l1.8-0.9L18.7,15h-2.2
        c0.2-0.6,0.4-1.3,0.5-2H20z
        M10,2c1.7,0,3,1.3,3,3c0,0.6-0.4,1-1,1H8C7.4,6,7,5.6,7,5C7,3.3,8.3,2,10,2z
        M5,12 c0-1.7,0.6-3.2,1.6-4.4C7,7.9,7.5,8,8,8h1v9.9C6.7,17.3,5,14.9,5,12z
        M11,17.9V8h1c0.5,0,1-0.1,1.4-0.4c1,1.1,1.6,2.7,1.6,4.4
        C15,14.9,13.3,17.3,11,17.9z" />
    </svg>
     {label}
  </label>
</li>
