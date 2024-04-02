import { toast } from 'react-toastify';
// import { toast, Toaster, useToaster } from 'react-hot-toast';   
// CustomToast.js
// import { useToaster } from 'react-hot-toast';
// import '../../../assets/styles/Toast.css'

// const ToastNotification = () => {
//     return (
//         <div>
//             <Toaster
//                 position="top-center"
//                 // containerClassName='toast'
//                 // containerStyle='toast'
//                 reverseOrder={false}
//                 toastOptions={{
//                     success: {
//                         duration: 10000,
//                         style: {
//                             'border-color': '#4caf50',
//                             // 'background-color': '#e0f4e0', 
//                             'color': '#4caf50'
//                         },
//                         theme: {
//                             primary: 'green',
//                             secondary: 'black',
//                         },
//                     },
//                     error: {
//                         duration: 3000,
//                         style: {
//                             "border-color": '#f44336',
//                             // 'background-color': '#ffd4d4', 
//                             'color': '#f44336'
//                         },
//                         theme: {
//                             primary: 'red',
//                             secondary: 'black',
//                         },
//                     },
//                 }}
//             />
//         </div>
//     );
// };


// const CustomToast = ({ message, type }) => {
//     const toaster = useToaster();

//     const showToast = () => {
//         toaster[type](message, {
//             duration: 4000, // Set your preferred duration
//             style: {
//                 border: '2px solid #4CAF50', // Customize the border color
//                 padding: '16px', // Customize the padding
//                 color: '#333', // Customize the text color
//                 background: '#e0f4e0', // Customize the background color
//             },
//         });
//     };

//     return (
//         <button onClick={showToast}>
//             Show {type} Toast
//         </button>
//     );
// };

const success = (msg) => {
    toast.success(msg, { autoClose: 2000 });
};

const errorMsg = (msg) => {
    toast.error(msg, { autoClose: 2000 });
    // CustomToast(msg, 'error')
};

const loading = (msg) => {
    toast.loading(msg, { style: { background: "#1877f2", color: "white", }, theme: { primary: "green", secondary: "black", } });
};

const custom = (msg) => {
    toast.custom(msg);
};

const dismiss = (toastId) => {
    toast.dismiss(toastId);
};

const remove = (toastId) => {
    toast.remove(toastId);
};

export { success, errorMsg, loading, custom, dismiss, remove };