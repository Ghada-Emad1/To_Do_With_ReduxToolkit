const Footer = () => {
  return (
    <footer className="p-4  text-Dark_Blue">
      <div className="flex flex-col gap-3">
        <h5 className="font-semibold text-2xl">Actions</h5>
        <button className="bg-Orange py-2 px-4 rounded text-white">Mark All Completed</button>
        <button className="bg-Orange py-2 rounded text-white">Clear Completed</button>
      </div>
      
      
    </footer>
  );
};

export default Footer;
