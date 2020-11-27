import { useEffect, useMemo, useState } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import {
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
} from '../../../apollo/queries/locations';

import { selectedListItemVar } from '../../../apollo/cache';

import LocationsModel from '../model/LocationsModel';

const useLocationsFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const selectedItemId = useReactiveVar(selectedListItemVar);

  const { data, loading, error, fetchMore } = useQuery(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      page: currentPage,
    },
  });

  const { data: { location } = {} } = useQuery(GET_LOCATION_BY_ID, {
    skip: !isDrawerOpen,
    variables: {
      id: selectedItemId,
    },
  });

  useEffect(() => {
    fetchMore(GET_LOCATIONS, {
      variables: {
        page: currentPage,
      },
    });
  }, [fetchMore, currentPage]);

  const { pageInfo, locations } = useMemo(() => LocationsModel(data), [data]);

  return {
    currentPage,
    error,
    isDrawerOpen,
    loading,
    location,
    locations,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  };
};

export default useLocationsFetchDetails;
