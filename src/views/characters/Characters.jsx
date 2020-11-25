import React from 'react';

import { Drawer, PageLayout } from '../../components';
import CharacterDetails from './character-details/CharacterDetails';
import useCharactersFetchDetails from './hooks/use-characters-fetch-details';

import { CHARACTERS_TABLE_COLUMN } from './constants';

const DRAWER_TITLE = 'Character Details';

function Characters() {
  const {
    character,
    characters,
    currentPage,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
  } = useCharactersFetchDetails();

  return (
    <div>
      <PageLayout
        columns={CHARACTERS_TABLE_COLUMN}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={characters}
        loading={loading}
        error={error}
        currentPage={currentPage}
      />
      {isDrawerOpen && character && (
        <Drawer title={DRAWER_TITLE}>
          <CharacterDetails character={character} />
        </Drawer>
      )}
    </div>
  );
}

export default Characters;
