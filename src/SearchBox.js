import React from 'react'

const SearchBox= ({searchfield,searchchange}) =>
{
	return(
			<div><input 
				type='search' 
			 	className='pa3 ba b--green bg-lightest-blue'
			 	placeholder='search robots'
			 	onChange= {searchchange}
			 	/> 
			</div>
		  );
}
export default SearchBox;