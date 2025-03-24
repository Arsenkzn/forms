export interface InputProps {

  label?: string;
  placeholder?: string;
  inputType?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  icon?: React.ReactNode;
  name?: string;
}

export const Input = ({ label, inputType = 'text', placeholder, description, value, onChange, icon }: InputProps) => {
  return (
    <> 
    <p>{label}</p>
    <p>{description}</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {icon && <span>{icon}</span>}
    <input
      title='Full name'
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      </div>
    </>
  );
};
