import React  from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import fotoHero from '../../assets/images/LoFoto03.jpeg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              L'officina Import Motor Service
            </h1>
            <div className="container-xs">
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Oficina mecânica especializada
                </p>
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Rua Itororó, 51 (atrás da Padaria Real Av. Afonso Vergueiro)
              </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Vila São João, Sorocaba/SP
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup className='button-group'>
                  <Button className='button button-primary' tag="a" color="dark" wideMobile href="https://api.whatsapp.com/send?phone=551532118246">
                    Contato
                  </Button>
                  <Button className='button button-primary' tag="a" color="dark" wideMobile href="https://www.google.com/maps/dir/?api=1&destination=lofficina&destination_place_id=ChIJ9QyP5LmKxZQRIc0bRQaIvAE&travelmode=driving">
                    Como Chegar
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={fotoHero}
              alt="Hero"
              width={896}
              height={504} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;