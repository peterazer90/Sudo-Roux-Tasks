import { useState, useEffect } from 'react';

function UseEndpointRequest(REQUEST) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  /// ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    REQUEST('get', '', `page=${page}`).then(({ data }) => {
      setResponse([...response, ...data.data.data]);
      setLoading(false);
      if (data.data.last_page === page) setHasNextPage(false);
    });
  }, [page]);
  /// ///////////////////////////////////////////////////////////////////////
  const loadEvent = () => {
    setLoading(true);
    setPage(page + 1);
  };
    /// ///////////////////////////////////////////////////////////////////////
  return {
    response, setResponse, loadEvent, loading, hasNextPage,
  };
}

export default UseEndpointRequest;
