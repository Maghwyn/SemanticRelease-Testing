import React from "react";
import Svg, { G, Path } from "react-native-svg";

export const DownloadSvg = ({ size = 48, fill = "#ffffff", ...props })  => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		{...props}
	>
		<G fill={fill}>
			<Path d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm3 1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3v9a1 1 0 0 1-1 1H6zM18.586 8H16a1 1 0 0 1-1-1V4.414L18.586 8z" />
			<Path d="M12 11a1 1 0 0 1 1 1v3.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 15.586V12a1 1 0 0 1 1-1z" />
		</G>
	</Svg>
)
