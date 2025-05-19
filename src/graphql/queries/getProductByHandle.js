export const getProductByHandle =
	`query($handle:String!) {
		productByHandle(handle: $handle) {
			id
			handle
			title
			description
	}	
}`