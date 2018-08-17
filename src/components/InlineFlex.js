import styled from 'styled-components';
import { Flex } from 'grid-styled';

const InlineFlex = styled(Flex).attrs({ is: 'span' })`
	display: inline-flex;
`;

export default InlineFlex;
