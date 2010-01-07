/**
 * Creates a new calendar grid to render a calendar month.
 * The grid will be 7 across and 6 down.
 * @param {Object} config  Configuration with the following parameters:
 *     - month:  A Date object which specifies the month and year to display.
 *     - firstDay: The day which is the first day of the week. 0 = Sunday, 1 = Monday, etc.
 *     - selected: Optional. A Date object representing which day to have selected, if any. 
 */
function CalendarGrid(config) {
	this.month = config.month;
	this.firstDay = config.firstDay;
	
	var first_of_month = this.month.clone().set({ day: 1 });
	var last_of_prev_month = first_of_month.clone().add({ days: -1 }); // This is on first row, row 0
	
	// Need to find may days to step back to get to first day of week
	
	var days_back = (last_of_prev_month.getUTCDay() - this.firstDay + 7) % 7
	this.cell00 = last_of_prev_month.clone().add({ days: -1 * days_back });
}

/**
 * Get the day of the week as a letter (M, T, W, etc) depending on the index
 * (0 is first column, 1 is second column, etc).
 * @param {Object} index  The column index.
 */
CalendarGrid.prototype.getDayOfWeekLetter = function(index) {
	return 'SMTWTFS'.substr((this.firstDay + index) % 7, 1);
}

/**
 * Get the date (day of month) that goes in the row and column.
 * @param {Object} row  Row, from 0
 * @param {Object} col  Column, from 0
 */
CalendarGrid.prototype.get = function(row, col) {
	return this.getDate(row, col).getUTCDate();
}

/**
 * Get a Date object corresponding to the row and column.
 * @param {Object} row  Row, from 0
 * @param {Object} col  Column, from 0
 */
CalendarGrid.prototype.getDate = function(row, col) {
	return this.cell00.clone().add({ days: 7*row + col });
}

CalendarGrid.prototype.getMonthAndYear = function() {
	return this.month.toString('MMMM yyyy');
}

/**
 * Generate a new CalendarGrid which represents the previous month.
 */
CalendarGrid.prototype.getPrevious = function() {
	return new CalendarGrid({
		month: this.month.clone().set({ day: 1 }).add({ months: -1 }),
		firstDay: this.firstDay
	})
}

/**
 * Generate a new CalendarGrid which represents the next month.
 */
CalendarGrid.prototype.getNext = function() {
	return new CalendarGrid({
		month: this.month.clone().set({ day: 1 }).add({ months: 1 }),
		firstDay: this.firstDay
	})
}
