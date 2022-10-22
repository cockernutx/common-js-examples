import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ComponentBackground } from './Common.styled';

interface ComponentLayoutProps {
    color: string,
    children?: React.ReactNode
}

function ComponentLayout({ color, children }: ComponentLayoutProps) {
    return (
        <ComponentBackground color={color}>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card>
                            <Card.Body>
                                {children}
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </ComponentBackground>
    )
}

export default ComponentLayout;