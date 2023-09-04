// import { useState } from 'react';

// function Sound() {
//   const [isSoundOn, setIsSoundOn] = useState(true); // Initial state of sound

//   const toggleSound = () => {
//     setIsSoundOn(prevState => !prevState); // Toggle the sound state
//   };

//   // ... rest of your component

//   return (
//     {routes.map((route, key) => (
//         <div key={key}>
//           {/* ... other submenu items */}
          
//           {/* Sound Toggle Submenu Item */}
//           {route.path === '/app/settings-sound' && (
//             <div
//               onClick={toggleSound}
//               className="cursor-pointer flex items-center"
//             >
//               {isSoundOn ? (
//                 <SpeakerphoneIcon className={submenuIconClasses} />
//               ) : (
//                 <VolumeOffIcon className={submenuIconClasses} />
//               )}
//               <span className="ml-2">
//                 Sound {isSoundOn ? 'On' : 'Off'}
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
      
//   );
// }

// export default Sound
