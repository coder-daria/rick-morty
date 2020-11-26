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
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  } = useCharactersFetchDetails();

  return (
    <div>
      <PageLayout
        columns={CHARACTERS_TABLE_COLUMN}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={characters}
        toggleDrawer={toggleDrawer}
      />
      {isDrawerOpen && character && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title={DRAWER_TITLE}
        >
          <CharacterDetails character={character} />
        </Drawer>
      )}
    </div>
  );
}

export default Characters;
