'use strict';

/**
 * Colors
 */

const black = '#1D1C2F';
const red = '#cc241d';
const green = '#98971a';
const yellow = '#d79921';
const blue = '#458588';
const magenta = '#b16286';
const cyan = '#689d6a';
const gray = '#a89984';

const lightBlack = '#928374';
const lightRed = '#f42c3e';
const lightGreen = '#b8bb26';
const lightYellow = '#fabd2f';
const lightBlue = '#99c6ca';
const lightMagenta = '#d3869b';
const lightCyan = '#7ec16e';
const lightGray = '#ebdbb2';

/**
 * Variables
 */

const primaryColor = '#fbf1c7';
const secondaryColor = '#f2e5bc';

/**
 * General
 */

const backgroundColor = '#202137';
const foregroundColor = '#f2e5bc';
const borderColor = '#1D2547';
const cursorColor = lightRed;
const selectionColor = '#1D2547';
const linkColor = secondaryColor;

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// light
			lightBlack,
			lightRed,
			lightGreen,
			lightYellow,
			lightBlue,
			lightMagenta,
			lightCyan,
			lightGray
		],
		termCSS: `
			${config.termCSS || ''}
			.terminal a {
		    color: ${linkColor};
		  }
			.terminal .xterm-selection div {
			  background: ${selectionColor};
			}
		`
	});
};
