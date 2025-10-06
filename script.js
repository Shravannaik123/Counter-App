/**
 * Counter Application Logic
 * Manages the state and DOM interactions for the counter.
 */

// The core state variable for the counter
let count = 0;

// Wait for the entire DOM to be loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the necessary DOM elements
    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    /**
     * Updates the visible count and manages the disabled state of the decrement button.
     * This function centralizes all UI updates to match the 'count' state.
     */
    function updateDisplay() {
        // 1. Update the visible number
        countDisplay.textContent = count;

        // 2. Control button state: Disable Decrement if count is 0 (prevents negative numbers)
        if (count === 0) {
            decrementBtn.disabled = true;
            // Remove hover styles for proper visual feedback when disabled
            decrementBtn.classList.remove('hover:bg-red-600', 'active:bg-red-700');
        } else {
            decrementBtn.disabled = false;
            // Re-enable hover effects when active
            decrementBtn.classList.add('hover:bg-red-600', 'active:bg-red-700');
        }
    }

    /**
     * Increases the count by 1 and updates the display.
     */
    function increment() {
        count++;
        updateDisplay();
    }

    /**
     * Decreases the count by 1.
     */
    function decrement() {
        // Only decrement if the count is greater than 0
        if (count > 0) {
            count--;
            updateDisplay();
        }
    }

    /**
     * Resets the count to 0 and updates the display.
     */
    function reset() {
        count = 0;
        updateDisplay();
    }

    // Attach event listeners to the buttons
    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);
    resetBtn.addEventListener('click', reset);

    // Initial call to set the display and button states (since count starts at 0)
    updateDisplay();
});