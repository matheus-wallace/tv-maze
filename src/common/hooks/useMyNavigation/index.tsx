import { useNavigation } from '@react-navigation/native';

const useMyNavigation = () => {
  const navigation = useNavigation<RoutesStackNavgationProp>();
  return navigation;
};

export default useMyNavigation;
