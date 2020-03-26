import { Component } from "react";
import {ThemeProvider} from "styled-components";
import {theme} from '../../utils/theme';
import { GlobalStyle } from "../../utils/globalStyles";

export class MainLayout extends Component {
	render() {
		const {children} = this.props;

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		);
	}
};