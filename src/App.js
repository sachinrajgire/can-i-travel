import './App.css';
import * as React from 'react';
import Dropdown from './Dropdown'
import Header from './Header/Header'
import Aboutus from './About/Aboutus'
import Card from './Card';



// First level 
const choices = {
  areYouOPT: "Are you on OPT",
  areYouStem: "Are you on STEM",
  areYouH1B: "Are you on H1B",
}

//Second level Choices
const decisionTree = {
  areYouOPT: {
    optAppliedPending: "OPT applied and pending",
    optApproved: "OPT approved",
  },
  areYouStem: {
    stemAppliedOptValid: "STEM OPT applied and first year OPT is still valid",
    stemAppliedOptExpired: "STEM OPT applied and first year OPT expired",
    stemApproved: "STEM OPT approved",
  },
  areYouH1B: {
    lotteryNotFiled: "Travel before lottery is filed",
    petitionNotFiled: "Travel after lottery is filed or selected, but before H-1B petition is filed",
    petitionPending: "Travel while H-1B petition is pending",
    petitionApproved: "Travel after H-1B petition is approved",
  }
}

const bodyText = {
  optAppliedPending: `<b>You can travel,<br> BUT NOT RECOMMENDED</b>
  <br><br>What if There is an RFE?
  <br>What if the OPT is denied?
  <br>You will not be able to enter the USA on F-1 if your OPT is denied`,

  optApproved: `<b>You CAN TRAVEL if: </b> 
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of employment/training
    <br>I-20 endorsed for travel
    <br>Note that the time outside during OPT is counted towards your maximum permitted days of unemployment`,

  stemAppliedOptValid: `<b>You CAN TRAVEL if: </b>
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of STEM employment/training
    <br>Proof that you worked during the first year OPT
    I-20 endorsed for travel`,
  stemAppliedOptExpired: `<b>DO NOT travel until STEM OPT is approved`,
  stemApproved: `<b>You CAN TRAVEL if:</b>
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of STEM employment/training
    <br>Proof that you worked during the first year OPT
    I-20 endorsed for travel
    <br>Note that the time outside during OPT is counted towards your maximum permitted days of unemployment`,

  lotteryNotFiled: ` <b>You CAN TRAVEL.</b> <br><br> Make sure you meet the requirements of OPT or STEM OPT travel`,
  petitionNotFiled: `<b>You CAN TRAVEL.</b> 
    <br><br> Make sure you meet the requirements of OPT or STEM OPT travel.
    <br>Be back in the USA when the H-1B petition is filed.`,
  petitionPending: `<b>NOT RECOMMENDED.</b><br><br> It creates problems.
    <b>What problems?</b>
    <br><br>1. You may not be able to return until H-1B is approved and you get an H-1B visa.
    <br><br>2. If you are able to return, your cap gap may have terminated.
    <br><br>3. you will have to get an H-1B visa OR apply again for change of status, which exposes you to RFE's just like the original filing.`,
  petitionApproved: `<b>If you travel <i>before</i> your H-1B start date</b>
  <br>You may have to wait outside the USA. Get an H-1B visa stamp.<br> Enter USA no earlier than 10 days before your H-1B start date.<br>
  <br><b>If you travel <i>after</i> your H-1B start date.</b><br>
  You will need to obtain an H-1B visa stamp at the consulate`,
}

function App() {
  const [visaStatus, setVisaStatus] = React.useState('')
  const [step2, setStep2] = React.useState('')

  let colorTest = "transparent"
  let textColor = "black"
  function handleParameter(value) {
    setVisaStatus(value);
    setStep2('');
  }

  function handleParameter2(value) {
    setStep2(value);
  }

  function handleTextColor(colorTest) {
    if (bodyText[step2].search("NOT RECOMMENDED") >= 0) {
      colorTest = "#BDE5F8" //blue
      textColor = "#00529B"
    } else if (bodyText[step2].search("DO NOT") >= 0) {
      colorTest = "#FFD2D2" //red
      textColor = "#D8000C"
    } else if (bodyText[step2].search("CAN TRAVEL") >= 0) {
      colorTest = "#DFF2BF" //green
      textColor = "#4F8A10"
    } else {
      colorTest = "transparent"
      textColor = "black"
    }

    return colorTest
  }

  return (
    <div >
      <Header
        heading={"Can I Travel"}
        customClass="header-class"
      />

      <div className="App">

        <Dropdown
          parameter={visaStatus}
          setParameter={(value) => handleParameter(value)}
          choices={choices}
          label="Visa Status"
        />

        {visaStatus !== '' &&
          <Dropdown
            parameter={step2}
            setParameter={(value) => handleParameter2(value)}
            choices={decisionTree[visaStatus]}
            label={visaStatus.slice(6) + " Status"}
          />
        }

        {step2 !== '' &&
          <Card
            label={visaStatus.slice(6) + " Status"}
            subHeading={decisionTree[visaStatus][step2]}
            textBody={(bodyText[step2])}
            bgColor={handleTextColor(colorTest)}
            textColor={textColor}
          />
        }
      <Aboutus />
      </div>
    </div>

  );
}

export default App;
