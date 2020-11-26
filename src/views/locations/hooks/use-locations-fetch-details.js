import { useMemo, useState, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import { GET_LOCATIONS, GET_LOCATION_BY_ID } from '../../../apollo/queries';
import { selectedListItemVar } from '../../../apollo/cache';

import LocationsModel from '../model/LocationsModel';

const useLocationsFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const selectedItemId = useReactiveVar(selectedListItemVar);

  const { data, loading, fetchMore, error } = useQuery(GET_LOCATIONS, {
    fetchPolicy: 'cache-first',
    variables: {
      page: currentPage,
    },
  });

  const { data: { location } = {} } = useQuery(GET_LOCATION_BY_ID, {
    variables: {
      skip: !selectedItemId,
      id: selectedItemId,
    },
  });

  useEffect(() => {
    if (currentPage !== 1) {
      fetchMore({
        variables: {
          page: currentPage,
        },
      });
    }
  }, [fetchMore, currentPage]);

  const { pageInfo, locations } = useMemo(() => LocationsModel(data), [data]);

  return {
    location,
    locations,
    currentPage,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  };
};

export default useLocationsFetchDetails;
