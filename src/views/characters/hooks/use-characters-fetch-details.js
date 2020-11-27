import { useEffect, useMemo, useState } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import { GRAPHQL_FETCH_POLICY } from '../../../common/constants/graphql';

import {
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
} from '../../../apollo/queries/characters';
import { selectedListItemVar } from '../../../apollo/cache';

import CharactersModel from '../model/CharactersModel';

const { CACHE_AND_NETWORK, CACHE_ONLY } = GRAPHQL_FETCH_POLICY;

const useCharactersFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const selectedItemId = useReactiveVar(selectedListItemVar);

  const { data, loading, fetchMore, error } = useQuery(GET_CHARACTERS, {
    fetchPolicy: CACHE_AND_NETWORK,
    notifyOnNetworkStatusChange: true,
    variables: {
      page: currentPage,
    },
  });

  const { data: { character } = {} } = useQuery(GET_CHARACTER_BY_ID, {
    fetchPolicy: !isDrawerOpen ? CACHE_ONLY : CACHE_AND_NETWORK,
    variables: {
      id: selectedItemId,
    },
  });

  useEffect(() => {
    fetchMore(GET_CHARACTERS, {
      variables: {
        page: currentPage,
      },
    });
  }, [fetchMore, currentPage]);

  const { pageInfo, characters } = useMemo(() => CharactersModel(data), [data]);

  return {
    character,
    characters,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  };
};

export default useCharactersFetchDetails;
