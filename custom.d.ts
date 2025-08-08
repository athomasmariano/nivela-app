declare module 'react-world-flags' {
    import * as React from 'react';
  
    export interface FlagProps extends React.SVGProps<SVGSVGElement> {
      code: string;
      height?: string | number;
      width?: string | number;
    }
  
    const Flag: React.FC<FlagProps>;
  
    export default Flag;
  }