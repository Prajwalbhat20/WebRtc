import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import {useParams} from 'react-router-dom';


const Roompage=()=>
{
    const {roomId}=useParams();

    const meeting= async(element)=>
    {
        const appID=1682887864;
        const serverSecret="7b2dc35b83421fa3e9ae3015089c0c91";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(), "Prajwal");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
       });

    };

   return <div>
   <div ref={meeting} />
   </div>;


};
export default Roompage;