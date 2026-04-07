/**
 * Finds the next and previous blog posts in an array based on the current URL.
 * * @param {string} currentUrl - The URL or slug of the currently viewed post.
 * @param {Array} blogPosts - The array of all blog post objects.
 * @returns {Object} An object containing `previous` and `next` post objects (or null if at the ends).
 */
export function getAdjacentPosts(
  currentUrl: string,
  blogPosts: (string | undefined)[],
) {
  // Find the exact index of the current post in the array
  const currentIndex = blogPosts.findIndex((post) => post === currentUrl);

  // If the current post isn't found in the array, return nulls safely
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    // If we are at the very beginning (index 0), there is no 'previous' post
    previous: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,

    // If we are at the very end of the array, there is no 'next' post
    next:
      currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
}
