import ThemedCard from '@/presentation/shared/ThemeCard';
import ThemedSwitch from '@/presentation/shared/ThemeSwich';
import ThemeView from '@/presentation/ThemeView';
import { useState } from 'react';

const Switches = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
  <ThemeView>
    <ThemedCard>
             <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-4"
        />

    </ThemedCard>
  </ThemeView>
  );
};
export default Switches;
