
export function signinUser({email, password}){
	// with redux thunk we can return a function to access the dispatch method of `react-redux`
	// this allows us to add logic before dispatching the action.object into the reducer
	return function(dispatch){
		dispatch({})
	}

	// submit email/password to the server

	// if request is good..
	// update state to indate user is authenticated
	// save the jwt token
	// redirect to the route '/feature'

	// if request is bad
	// show an error to the user

}