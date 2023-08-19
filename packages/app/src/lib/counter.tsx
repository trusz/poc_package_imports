import React from 'react'

export function Counter(){
	const [count, setCount] = React.useState(0)

	return (
		<React.Fragment>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</React.Fragment>
	)
}