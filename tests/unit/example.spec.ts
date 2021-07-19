import { shallowMount } from '@vue/test-utils';
import GitList from '@/components/GitList.vue';

describe('GitList.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(GitList, {
            props: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
