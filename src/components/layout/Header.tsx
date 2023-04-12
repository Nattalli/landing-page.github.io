import { Layout, Typography } from 'antd';
import './Header.scss';

export default function Header() {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layout.Header className="header">
            <div className="header-content">
                <div className="header-content">
                    <Typography.Link onClick={() => handleClick('block1')}>
                        Про конкурс
                    </Typography.Link>
                    <Typography.Link onClick={() => handleClick('block2')}>
                        Учительству
                    </Typography.Link>
                    <Typography.Link onClick={() => handleClick('block3')}>
                        Учнівству
                    </Typography.Link>
                    <Typography.Link onClick={() => handleClick('block4')}>
                        Карта інноваторів/ок
                    </Typography.Link>
                </div>
            </div>
        </Layout.Header>
    );
}
