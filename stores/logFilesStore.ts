import { defineStore } from "pinia";

export const useLogFileStore = defineStore("logFiles", () => {
  const logFiles = ref([] as (string | undefined)[]);

  // 1. Read all .vue files in the target directory using Vite's glob import
  // Adjust the path '~/pages/logs' to wherever your actual logs folder is located.
  const glob = import.meta.glob("~/pages/case-logs/*.vue");

  // 2. Extract just the file names without paths or extensions

  logFiles.value = Object.keys(glob)
    .map((path) => {
      // Split by slash and get the last part (e.g., "my-log.vue")
      const fileWithExtension = path.split("/").pop();
      // Remove the .vue extension
      return fileWithExtension?.replace(".vue", "");
    })
    // Optional: Filter out 'index' if you have an index.vue you don't want listed
    .filter((name) => name !== "index");

  return { logFiles };
});
