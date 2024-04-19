import {render,screen} from '@testing-library/react';
import RestaurantCard from '../components/RestaurantCard';
import MOCK_DATA from "../mocks/resCardMock.json";
import '@testing-library/jest-dom';

it("should render RestaurentCard component with pros Data",()=>{
render(<RestaurantCard resData = {MOCK_DATA} />);
const name = screen.getByText("Pizza Hut");
expect(name).toBeInTheDocument();
});