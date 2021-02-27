export const fetchBegin = () => ({
    type: 'FETCH_BEGIN'
  });
  
export const fetchFail = error => ({
    type: 'FETCH_FAIL',
    payload: error
  });
  
export const fetchSuccess_members = data => ({
    type: 'FETCH_SUCCESS_MEMBERS',
    payload: data
  });

export const fetchSuccess_detail = data => ({
    type: 'FETCH_SUCCESS_DETAIL',
    payload: data
  });

export const fetchCongressMembers = () => {
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

        dispatch(fetchSuccess_members(congressMembers));
    }
}

export const detail = (memberId) => {
  return async dispatch => {

      dispatch(fetchBegin());

      let detailMember = await fetch(`https://api.propublica.org/congress/v1/members/${memberId}.json`,{  
          headers: {
            'X-API-Key': "S3Ldr00C0Z7h4ROyJ3SBXb859glusD76QEylQP1X",
          }
      })
          .then(response => response.json())
          .then(data => data.results[0])
          .catch(error => dispatch(fetchFail(error)))

      dispatch(fetchSuccess_detail(detailMember));
  }
}