import React from 'react';
import LocalizedStrings from 'react-localization';

const CandidateSectionHeader = ({ candidatePosition, races }) => {
  let instructions;
  let heading;
  let strings = new LocalizedStrings({
    en:{
      mayorHeading: "FOR THE ELECTION, YOU CAN VOTE FOR 1 CANDIDATE",
      mayorInstructions: `The mayor leads City Council. City Council has 
          the authority to pass bylaws that control many things in Vancouver.`,
      councillorHeading: "FOR THE ELECTION, YOU CAN VOTE FOR UP TO 10 CANDIDATES",
      councillorInstructions: `Together, the mayor and councillors are responsible 
          for services such as bylaws, taxes, streets, sidewalks, and water.`,
      boardHeading: "FOR THE ELECTION, YOU CAN VOTE FOR UP TO 7 CANDIDATES",
      boardInstructions: `The Park Board is responsible for managing City parks and 
          community centres, and provides a wide range of recreation services.`,
      trusteeHeading: "FOR THE ELECTION, YOU CAN VOTE FOR UP TO 9 CANDIDATES",
      truesteeInstructions: `The school board is independent of City Council. It 
          provides elementary, secondary, community, and specialized education 
          services in the city, UBC Lands, and University Endowment Lands.`,
      defaultHeading: "NO HEADING",
      defaultInstructions: "NO INSTRUCTIONS",
    },
    fr: {
      mayorHeading: "POUR L'ÉLECTION, VOUS POUVEZ VOTER POUR 1 CANDIDAT",
      mayorInstructions:`Le maire dirige le conseil municipal. Le conseil municipal 
          a le pouvoir d'adopter des règlements administratifs qui contrôlent beaucoup 
          de choses à Vancouver`,
      councillorHeading: "POUR L'ÉLECTION, VOUS POUVEZ VOTER JUSQU'À 10 CANDIDATS",
      councillorInstructions: `Ensemble, le maire et les conseillers sont responsables 
          des services tels que les règlements administratifs, les taxes, les rues, les 
          trottoirs et l'eau.`,
      boardHeading: "POUR L'ÉLECTION, VOUS POUVEZ VOTER JUSQU'À 7 CANDIDATS",
      boardInstructions: `
      Le conseil du parc est responsable de la gestion des parcs et des centres 
          communautaires de la ville et offre une vaste gamme de services récréatifs.`,
      trusteeHeading: "POUR L'ÉLECTION, VOUS POUVEZ VOTER JUSQU'À 9 CANDIDATS",
      truesteeInstructions: `La commission scolaire est indépendante du conseil municipal. 
          Il offre des services d'enseignement élémentaire, secondaire, communautaire et 
          spécialisé dans la ville, les terres de l'UBC et les terres de dotation universitaire.`,
      defaultHeading: "PAS DE TÊTE",
      defaultInstructions: "PAS D'INSTRUCTIONS",
    }
  });

  switch (candidatePosition) {
    case 'Mayor':
      heading = <>{strings.mayorHeading}</>;
      instructions = (
        <>
          {strings.mayorInstructions}
        </>
      );
      break;

    case 'Councillor':
      heading = <>{strings.councillorHeading}</>;
      instructions = (
        <>
          {strings.councillorInstructions}
        </>
      );
      break;
    case 'Park Board Commissioner':
      heading = <>{strings.boardHeading}</>;
      instructions = (
        <>
          {strings.boardInstructions}
        </>
      );
      break;
    case 'School Trustee':
      heading = <>{strings.trusteeHeading}</>;
      instructions = (
        <>
          {strings.truesteeInstructions}
        </>
      );
      break;
    default:
      heading = <>{strings.defaultHeading}</>;
      instructions = <>{strings.defaultInstructions}</>;
  }

  return (
    <>
      <h4>
        <span className='card-subtitle mb-2 text-muted'>{heading}</span>
      </h4>
      <br />
      <p>{instructions}</p>
    </>
  );
};

export default CandidateSectionHeader;
