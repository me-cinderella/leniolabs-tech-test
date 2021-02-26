export const fetchBegin = () => ({
    type: 'FETCH_BEGIN'
  });
  
export const fetchFail = error => ({
    type: 'FETCH_FAIL',
    payload: error
  });
  
export const fetchSuccess = data => ({
    type: 'FETCH_SUCCESS',
    payload: data
  });

const fetchCongressMembers = () => {
    return async dispatch => {

        dispatch(fetchBegin());

        let congressMembers = await fetch('https://api.propublica.org/congress/v1/116/senate/members.json',{  
            headers: {
              'X-API-Key': "S3Ldr00C0Z7h4ROyJ3SBXb859glusD76QEylQP1X",
            }
        })
            .then(response => response.json())
            .then(data => data.results[0].members)
            .catch(error => dispatch(fetchFail(error)))

        dispatch(fetchSuccess(congressMembers));
    }
}

export default fetchCongressMembers;