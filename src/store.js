import { writable } from "svelte/store";

export const type = writable("feat");
export const scope = writable("API");
export const commit = writable("Add new user endpoint");
