const TabButton = ({ label, active, onClick }) => (
    <li className="tab-btn-item">
       <button
         className={`tab-btn title h6 ${active ? 'active' : ''}`}
         data-tab-btn={label.toLowerCase()}
         onClick={onClick}
       >
         {label}
       </button>
    </li>
   );
   
   export default TabButton;
   