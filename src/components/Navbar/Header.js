import React from "react";

const Header = () => {
	return (
		<header class="flex items-center justify-between">
			<h2 class="text-lg leading-6 font-medium text-black">
				Chadidi.dev
			</h2>
			<button class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
				<svg
					class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
					width="12"
					height="20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
					/>
				</svg>
				New
			</button>
		</header>
	);
};

export default Header;
