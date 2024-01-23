import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ShowModel } from '../../common/models/show.model';

declare global {
  export type RoutesParamsList = {
    BottomTab?: NavigatorScreenParams<BottomTabParamList>;
    Details: { show: ShowModel };
    Person: any;
  };

  /**
   * useNavigation types
   */

  export type RoutesStackNavgationProp = NativeStackNavigationProp<
    RoutesParamsList,
    'BottomTab'
  >;

  /**
   * useRoute types
   */

  export type DetailRouteProp = RouteProp<RoutesParamsList, 'Details'>;
}