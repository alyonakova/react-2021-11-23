import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render with empty reviews', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
    expect(wrapper.find('[data-id="review"]').length).toBe(0);
  });

});
