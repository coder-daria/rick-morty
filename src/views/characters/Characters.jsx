import React from 'react';

import { Drawer, PageLayout } from '../../components';
import CharacterDetails from './character-details/CharacterDetails';
import useCharactersFetchDetails from './hooks/use-characters-fetch-details';

import { CHARACTERS_TABLE_COLUMN } from './constants';

const VIEW_TITLE = 'characters';

const DRAWER_TITLE = 'Character Details';
function Characters() {
  const {
    character,
    characters,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
  } = useCharactersFetchDetails();

  return (
    <div>
      <PageLayout
        columns={CHARACTERS_TABLE_COLUMN}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={characters}
        title={VIEW_TITLE}
      />
      {isDrawerOpen === VIEW_TITLE && character && (
        <Drawer title={DRAWER_TITLE}>
          <CharacterDetails character={character} />
        </Drawer>
      )}
    </div>
  );
}

export default Characters;
