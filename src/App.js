import React, {useEffect, useState} from 'react';
import {Select, SelectOption, Input, Checkbox, CheckboxGroup} from '@momentum-ui/react';
import '@momentum-ui/core/css/momentum-ui.min.css';
import {CodeBlock, tomorrow, a11yDark, googlecode} from "react-code-blocks";
import { lightTheme, darkTheme } from './Constants';
import './App.scss';

export default function App() {

    // const lightTheme = 'light';
    // const darkTheme = 'dark';
    // const [theme,changeTheme] = useState('light')
    const [token, setToken] = useState('');
    const [destination, setDestination] = useState('');
    const [checked, setChecked] = useState(false);


    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [muteAudioIM, setMuteAudioIM] = useState(false);
    const [muteVideoIM, setMuteVideoIM] = useState(false);
    const [settingsIM, setSettingsIM] = useState(false);
    const [shareScreenIM, setShareScreenIM] = useState(false);
    const [leaveMeetingIM, setLeaveMeetingIM] = useState(false);
    const [memberRoasterIM, setMemberRoasterIM] = useState(false);
    const [muteAudioIC, setMuteAudioIC] = useState(false);
    const [muteVideoIC, setMuteVideoIC] = useState(false);
    const [settingsIC, setSettingsIC] = useState(false);
    const [joinMeetingIC, setJoinMeetingIC] = useState(false);
    const [arrNew, setArrNew] = useState([]);

    const code =
    `<html>
        <head>
            <title>Webex Widget Demo</title>
            <link href="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/webex-widgets.css" />
            <script src="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/bundle.js"></script>
        </head>
        <body>
            <div id="meeting-widget"></div>
            <script>
                webexMeetingWidget({accessToken: "${token}",
                    meetingDestination: "${destination}",
                    theme:"light",
                    width:"${width}",
                    height:"${height}",
                    layout:"Grid",
                    inMeetingControls:['mute-audio','leave-meeting'],
                    interstitialControls:['join-meeting']});
            </script>
        </body>
</html>`;

    // var arr = [];

    function handleChange(event) {
        console.log(event);
        // console.log('handle change ' + checked);
        // var val = event.target.value.substring(0, event.target.value.length - 3);
        // setChecked((isChecked) => toggle(isChecked))
        // console.log("checked " + checked)
        // if(!checked){
        //     arr.push(val)
        //     //setChecked(toggle)
        // } else {
        //     console.log(arr)
        //     arr.filter(event => event !== (val))
        // }
        // console.log(arr)
    }

    // var val = event.target.value;
        // console.log(val)
        // setChecked(toggle);
        // console.log(checked)

        // if(!checked) {
        //     mc.push(val);
        // } else {
        //     mc.filter(event => event !== (val))
        // }
        // console.log("meeting controls...")
        // console.log(mc);

   
    const [ meetingControls, setMeetingControls] = useState([])
    
    function change(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(event.target.checked);

        // setChecked((checked) => !checked)
        // setMeetingControls((meetingControls) => [...meetingControls, event.target.value])
        // console.log(meetingControls)

        
    }

    function toggle(value) {
        // console.log("toggle value ")
        console.log(!value);
        return !value;
    }

    // let arrNew = [];

    function arraySetter(checkboxValue, checkboxName,setFn) {
        let arr = arrNew
        // console.log("checkbox value")
        // console.log(checkboxValue)
        // console.log("checkboxName  " + checkboxName)
        if(checkboxValue) {
            arr.push(checkboxName)
        } else {
            arr = arr.filter(val => val != (checkboxName))
        }
        setArrNew(arr)
        setFn((checkboxValue) => !checkboxValue)
        // console.log(arr)
    }

    function samplefn(event) {
        // console.log("hi");
        // console.log(event.target.value)

        switch (event.target.value) {
            case 'mute-audio-im':
                // console.log("switch-case")
                arraySetter(!muteAudioIM, event.target.value, setMuteAudioIM)
                // console.log(arrNew);
                // arraySetter(muteAudioIM, event.target.value)
                break;
            case 'mute-video-im':
                // setMuteAudioIM((muteVideoIM) => !muteVideoIM)
                arraySetter(!muteVideoIM, event.target.value, setMuteVideoIM)
                // setMuteAudioIM((muteVideoIM) => !muteVideoIM)
                break;
        }
    };

    // useEffect (() => {
    //     console.log("useeffect audio"); 
    //     arraySetter(muteAudioIM, event.target.value)
    // }, [muteAudioIM]);

    // useEffect (() => {
    //     console.log("useeffect video"); 
    //     arraySetter(muteVideoIM, event.target.value)
    // }, [muteVideoIM]);

  return (
      
      <div>
          <header className='App-header'>
          {/* <h1 className='header'>Meetings Widget Demo</h1> */}
          <div className='outerDiv'>
                <div className='flex-child'>
                    <div>
                    
                    {console.log( "mute Audio -> " + muteAudioIM)}
                    {console.log( "Mute Video -> " + muteVideoIM)}
                    {console.log( "Array -> " + arrNew)}

                    {/* <Checkbox
                        value='mute-audio'
                        name='meeting-controls'
                        label='mute-audio'
                        htmlId='testCheckbox1'
                       
                        onChange={() => setMuteAudioIM(toggle)}
                    />
                    
                    <Checkbox
                        value='mute-video'
                        name='meeting-controls'
                        label='mute-video'
                        htmlId='testCheckbox2'
                        checked={true}
                        onChange={change}
                    />  */}
                    
                    <Input
                        name='Access Token'
                        label='Access Token'
                        htmlId='defaultInput'
                        inputSize='small-10'
                        placeholder='access token'
                        value={token}
                        onChange={(event) => setToken(event.target.value)}
                    />
                    <Input
                        name='Meeting Destination'
                        label='Meeting Destination'
                        htmlId='defaultInput'
                        inputSize='small-10'
                        placeholder='meeting destination ID'
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                    />
                    
                    </div>
                    <div className='form-inline'>
                        <div>
                            
                        InMeeting Controls
                            <div className='form-inline'>
                                <div>
                                {/* {console.log( "here mute audio " + muteAudioIM)} */}
                                    <CheckboxGroup name='CheckboxGroup1'>
                                        <Checkbox
                                            value='mute-audio-im'
                                            name='meeting-controls'
                                            label='mute-audio'
                                            htmlId='testCheckbox1'
                                            checked={muteAudioIM}
                                            // onChange={() => setMuteAudioIM(!muteAudioIM) }
                                            onClick={(event)=> {
                                                
                                                samplefn(event);
                                                // setMuteAudioIM(!muteAudioIM);
                                            }}
                                        />
                                        <Checkbox
                                            value='mute-video-im'
                                            name='meeting-controls'
                                            label='mute-video'
                                            htmlId='testCheckbox2'
                                            checked={muteVideoIM}
                                            // onClick={() => setMuteVideoIM(!muteVideoIM)}
                                            onClick={(event)=> {
                                                
                                                samplefn(event);
                                                // setMuteVideoIM(!muteVideoIM);
                                            }}
                                        />   
                                    </CheckboxGroup>
                                </div>
                                
                                <div>
                                <CheckboxGroup name='CheckboxGroup2'>
                                        <Checkbox
                                            value='settings-im'
                                            label='settings'
                                            htmlId='testCheckbox3'
                                            onClick={() => setSettingsIM(toggle)}
                                        />
                                        <Checkbox
                                            value='share-screen-im'
                                            label='share-screen'
                                            htmlId='testCheckbox4'
                                            onClick={() => setShareScreenIM(toggle)}
                                        />  
                                    </CheckboxGroup>
                                </div>

                                <div>
                                    <CheckboxGroup name='CheckboxGroup3'>  
                                        <Checkbox
                                            value='leave-meeting-im'
                                            label='leave-meeting'
                                            htmlId='testCheckbox5'
                                            onClick={() => setLeaveMeetingIM(toggle)}
                                        />
                                        <Checkbox
                                            value='member-roaster-im'
                                            label='member-roaster'
                                            htmlId='testCheckbox6'
                                            onClick={() => setMemberRoasterIM(toggle)}
                                        />     
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="form-inline">
                        <div>
                        Interstitial Controls
                            <div className="form-inline">
                                <div>
                                <CheckboxGroup name='CheckboxGroup4'>
                                    <Checkbox
                                        value='mute-audio-ic'
                                        label='mute-audio'
                                        htmlId='testCheckbox7'
                                        onClick={() => setMuteAudioIC(toggle)}
                                    />
                                    <Checkbox
                                        value='mute-video-ic'
                                        label='mute-video'
                                        htmlId='testCheckbox8'
                                        onClick={() => setMuteVideoIC(toggle)}
                                    />
                                </CheckboxGroup>

                                </div>
                                <div>
                                    <CheckboxGroup name='CheckboxGroup5'>
                                        <Checkbox
                                            value='settings-ic'
                                            label='settings'
                                            htmlId='testCheckbox9'
                                            onClick={() => setSettingsIC(toggle)}
                                        />
                                        <Checkbox
                                            value='join-meeting-ic'
                                            label='join-meeting'
                                            htmlId='testCheckbox10'
                                            onClick={() => setJoinMeetingIC(toggle)}
                                        />   
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Theme
                        <div className='form-inline'>   
                            <Select defaultValue='Select Item Here' >
                                <SelectOption value={lightTheme} label={lightTheme} onClick={() => console.log(lightTheme)}/>
                                <SelectOption value={darkTheme} label={darkTheme} />
                            </Select>
                        </div>
                    </div> 
                    <div>
                        Layout
                        <div className='form-inline-nowrap'>
                            <Input
                                name='width'
                                label='Width'
                                htmlId='defaultInput3'
                                inputSize='small-5'
                                placeholder='width'
                                onChange={(event) => setWidth(event.target.value)}
                            />
                            <Input
                                name='height'
                                label='Height'
                                htmlId='defaultInpu4'
                                inputSize='small-5'
                                placeholder='height'
                                onChange={(event) => setHeight(event.target.value)}
                            />
                        </div>
                    </div>    
                </div>
                <div className='flex-child'>
                <div className="code">
                    <CodeBlock
                        text={code}
                        language={"html"}
                        showLineNumbers={true}
                        theme={tomorrow}
                        wraplines
                    />
                </div>
              </div>
          </div>
          </header>
      </div>
  );
}



