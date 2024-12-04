describe('QuizA Application Journey', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    Cypress.Commands.add('testExternalLink', (selector, expectedUrl) => {
        cy.get(selector).then($link => {
        const url = $link.prop('href')
        expect(url).to.equal(expectedUrl)
        })
    })
  
    describe('Home Page Navigation', () => {
      it('should display home page elements correctly', () => {
        cy.get('img[alt="QuizA Logo"]').should('be.visible')
 
        cy.contains('Welcome to QuizA').should('be.visible')
    
        cy.get('nav').within(() => {
          cy.contains('Home').should('be.visible')
          cy.contains('Quiz').should('be.visible')
        })
      })
      
      it('should display all quiz cards', () => {
        const quizTitles = [
          'Software Test Life Cycle',
          'Principles of Testing',
          'Test Age Estimator',
          'Practice QA Metrics',
          'ISTQB like Test',
          'Credit Risk Calculator',
          'QA Bug Report',
          'Test Mood tracker App'
        ]
  
        quizTitles.forEach(title => {
          cy.contains(title).should('be.visible')
        })
      })
  
      it('should navigate to STLC quiz through main CTA', () => {
        cy.contains('Start the Quiz').click()
        cy.url().should('include', '/quizstlc')
      })
  
      it('should navigate to STLC quiz through card', () => {
        cy.contains('Software Test Life Cycle').click()
        cy.url().should('include', '/quizstlc')
      })
    })

    describe('Contact Form and Social Links', () => {
        it('should validate and submit contact form', () => {
        cy.contains('Get in Touch').scrollIntoView()

        cy.get('button[type="submit"]').click()

        cy.get('input[name="name"]')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill in this field.')

        cy.get('input[name="email"]')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill in this field.')

        cy.get('textarea[name="message"]')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill in this field.')

    })

    it('should show validation message for invalid email', () => {
      cy.contains('Get in Touch').scrollIntoView()

      cy.get('input[name="name"]').type('Test User')
      cy.get('input[name="email"]').type('invalid-email')
      cy.get('textarea[name="message"]').type('Test message')
      cy.get('button[type="submit"]').click()

      cy.get('input[name="email"]')
        .invoke('prop', 'validationMessage')
        .should('contain', 'Please include') 

          cy.get('input[name="name"]').type('Test User')
          cy.get('input[name="email"]').type('invalid-email')
          cy.get('textarea[name="message"]').type('Test message')

          cy.get('input[name="email"]')
            .clear()
            .type('test@example.com')

        cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
            statusCode: 200,
            body: { success: true }
        }).as('emailSubmission')

        cy.get('button[type="submit"]').click()

        cy.wait('@emailSubmission')
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Thank you. I will get back to you as soon as possible.')
        })

        cy.get('input[name="name"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.value', '')
        cy.get('textarea[name="message"]').should('have.value', '')
        })
        it('should handle email service errors', () => {
          cy.contains('Get in Touch').scrollIntoView()

          cy.get('input[name="name"]').type('Test User')
          cy.get('input[name="email"]').type('test@example.com')
          cy.get('textarea[name="message"]').type('Test message')

          cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
            statusCode: 500,
            body: { error: 'Service unavailable' }
          }).as('emailError')
    
          cy.get('button[type="submit"]').click()
  
          cy.wait('@emailError')
          cy.on('window:alert', (text) => {
            expect(text).to.equal('Something went wrong. Please, try again.')
          })
        })

        it('should have working social media links', () => {
          cy.contains('Get in Touch').scrollIntoView()

          cy.get('a[href="https://github.com/torbalansky"]')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener noreferrer')

          cy.get('a[href="https://www.linkedin.com/in/srstathis/"]')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener noreferrer')

          cy.get('a[href="https://portfoliopaco.vercel.app/"]')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener noreferrer')
        })
    
        it('should display contact information correctly', () => {
          cy.contains('Get in Touch').scrollIntoView()

      cy.contains('digilabsrs@gmail.com').should('be.visible')

      cy.get('a[href*="github.com"]').find('svg').should('be.visible')
      cy.get('a[href*="linkedin.com"]').find('svg').should('be.visible')
      cy.get('a[href*="portfoliopaco"]').find('svg').should('be.visible')
    })

    it('should have working social media hover states', () => {
      cy.contains('Get in Touch').scrollIntoView()

      cy.get('a[href*="github.com"]')
        .trigger('mouseover')
        .should('have.css', 'color')

      cy.get('a[href*="linkedin.com"]')
        .trigger('mouseover')
        .should('have.css', 'color')

        cy.get('a[href*="portfoliopaco"]')
        .trigger('mouseover')
        .should('have.css', 'color')
    })
  })

  describe('Disclaimer Section', () => {
    it('should display disclaimer text', () => {
      cy.contains('Disclaimer:').scrollIntoView()
      cy.contains('This is a training application').should('be.visible')
      cy.contains('not fully optimized for mobile devices').should('be.visible')
    })
  })
    
describe('STLC Flow Quiz', () => {
    beforeEach(() => {
      cy.visit('/quizstlc')
      cy.contains('Software Test Life Cycle (STLC)').should('be.visible')
    })
  
    it('should display initial quiz elements', () => {
      cy.contains('h1', 'Software Test Life Cycle (STLC)').should('be.visible')

      cy.contains('put in the right order the stages of the STLC').should('be.visible')

      cy.get('[data-testid="help-button"]').should('be.visible')

      cy.get('[data-testid^="drop-zone-"]').should('have.length', 12)

      cy.get('[data-testid="card-title"]').should('have.length', 6)
      cy.get('[data-testid="card-icon"]').should('have.length', 6)
    })
  
    it('should allow dropping cards into zones', () => {
      cy.get('[data-testid="card-title"]').first()
        .trigger('dragstart')
      cy.get('[data-testid="drop-zone-0"]')
        .trigger('drop')

      cy.get('[data-testid="drop-zone-0"]')
        .find('[data-testid^="dropped-card-"]')
        .should('exist')
    })
  
    it('should allow returning cards to draggable area', () => {
      cy.get('[data-testid="card-title"]').first()
        .trigger('dragstart')
      cy.get('[data-testid="drop-zone-0"]')
        .trigger('drop')

      cy.get('[data-testid="drop-zone-0"]')
        .find('[data-testid^="dropped-card-"]')
        .click()

      cy.get('[data-testid="drop-zone-0"]')
        .find('[data-testid="drop-zone-placeholder"]')
        .should('be.visible')
    })
  
    it('should show error for incorrect order', () => {
      cy.get('[data-testid="card-title"]').last()
        .trigger('dragstart')
      cy.get('[data-testid="drop-zone-0"]')
        .trigger('drop')

      cy.get('[data-testid="submit-order-button"]').click()

      cy.on('window:alert', (text) => {
        expect(text).to.equal('Incorrect Order. Please Try Again.')
      })
    })
  
    it('should reset the game state', () => {
      cy.get('[data-testid="card-title"]').first()
        .trigger('dragstart')
      cy.get('[data-testid="drop-zone-0"]')
        .trigger('drop')
  
      cy.get('[data-testid="reset-button"]').click()

      cy.get('[data-testid="drop-zone-placeholder"]')
        .should('have.length', 6)
    })
  
    it('should complete quiz successfully', () => {
      const correctOrder = [
        'Requirements Analysis',
        'Test Planning',
        'Test Case Design',
        'Environment Setup',
        'Test Execution',
        'Test Cycle Closure'
      ]
  
      correctOrder.forEach((title, index) => {
        cy.contains(title)
          .trigger('dragstart')
        cy.get(`[data-testid="drop-zone-${index}"]`)
          .trigger('drop')
      })

      cy.get('[data-testid="submit-order-button"]').click()

      cy.contains('Great Job!').should('be.visible')
      cy.get('[data-testid="next-task-button"]').should('be.visible')
    })
  
    it('should navigate to next task', () => {
      const correctOrder = [
        'Requirements Analysis',
        'Test Planning',
        'Test Case Design',
        'Environment Setup',
        'Test Execution',
        'Test Cycle Closure'
      ]
  
      correctOrder.forEach((title, index) => {
        cy.contains(title)
          .trigger('dragstart')
        cy.get(`[data-testid="drop-zone-${index}"]`)
          .trigger('drop')
      })
  
      cy.get('[data-testid="submit-order-button"]').click()

      cy.get('[data-testid="next-task-button"]').click()
  
      cy.url().should('include', '/quizprinciples')
    })

    it('should be responsive', () => {
      cy.viewport('iphone-x')
      cy.contains('Software Test Life Cycle (STLC)').should('be.visible')

      cy.viewport('ipad-2')
      cy.contains('Software Test Life Cycle (STLC)').should('be.visible')

      cy.viewport('macbook-15')
      cy.contains('Software Test Life Cycle (STLC)').should('be.visible')
    })

    it('should open help modal', () => {

        cy.get('[data-testid="help-button"]').click()
        cy.get('.bg-blue-500').should('be.visible')

      })
  })
  describe('Age Category Estimator', () => {
    beforeEach(() => {
      cy.visit('/ageestimator')
    })
  
    describe('UI Elements', () => {
      it('should display all initial elements', () => {
        cy.contains('Age Category Estimator').should('be.visible')
        cy.get('#age').should('be.visible')
        cy.contains('button', 'Determine').should('be.visible')
        cy.contains('Test Cases Age Category Estimator').should('be.visible')
      })
    })
  
    describe('Age Category Functionality', () => {
      it('should validate input fields', () => {
        cy.get('button').contains('Determine').click()
        cy.contains('Age must be a non-negative integer').should('be.visible')
 
        cy.get('#age').type('-5')
        cy.get('button').contains('Determine').click()
        cy.contains('Age must be a non-negative integer').should('be.visible')

        cy.get('#age').clear().type('abc')
        cy.get('button').contains('Determine').click()
        cy.contains('Age must be a non-negative integer').should('be.visible')
      })
  
      it('should correctly categorize different ages', () => {
        const testCases = [
          { age: '5', category: 'Kid' },
          { age: '15', category: 'Teenager' },
          { age: '30', category: 'Adult' },
          { age: '70', category: 'Elder' }
        ]
  
        testCases.forEach(({ age, category }) => {
          cy.get('#age').clear().type(age)
          cy.get('button').contains('Determine').click()
          cy.contains(category).should('be.visible')
        })
      })
    })
  
    describe('Test Cases Validation', () => {
        it('should reset test results', () => {
          cy.contains('tr', 'TC01')
            .find('button')
            .contains('Pass')
            .click()

          cy.contains('tr', 'TC01')
            .find('td')
            .contains('Correct')
            .should('be.visible')

          cy.contains('button', 'Reset').click()
    
          cy.wait(500)
 
          cy.contains('tr', 'TC01')
            .find('td:last')
            .invoke('text')
            .should('be.empty')

      cy.contains('tr', 'TC01').within(() => {
        cy.get('button')
          .contains('Pass')
          .should('have.class', 'bg-gray-300')
        
        cy.get('button')
          .contains('Fail')
          .should('have.class', 'bg-gray-300')
      })
    })

    it('should handle multiple resets', () => {
      const testCases = ['TC01', 'TC02', 'TC03']
      
      testCases.forEach(id => {
        cy.contains('tr', id)
          .find('button')
          .contains('Pass')
          .click()
      })

       cy.contains('button', 'Reset').click()

       testCases.forEach(id => {
         cy.contains('tr', id)
           .find('td:last')
           .invoke('text')
           .should('be.empty')
       })
     })
   })       
  
    describe('Complete Test Flow', () => {
      it('should complete all test cases and submit successfully', () => {
        const testCaseResults = [
          { id: 'TC01', result: 'Pass' },
          { id: 'TC02', result: 'Pass' },
          { id: 'TC03', result: 'Pass' },
          { id: 'TC04', result: 'Pass' },
          { id: 'TC05', result: 'Pass' },
          { id: 'TC06', result: 'Pass' },
          { id: 'TC07', result: 'Pass' },
          { id: 'TC08', result: 'Pass' },
          { id: 'TC09', result: 'Pass' },
          { id: 'TC10', result: 'Pass' },
          { id: 'TC11', result: 'Pass' },
          { id: 'TC12', result: 'Pass' },
          { id: 'TC13', result: 'Fail' },
          { id: 'TC14', result: 'Pass' }
        ]

        testCaseResults.forEach(({ id, result }) => {
          cy.contains('tr', id).within(() => {
            cy.contains('button', result).click()
          })
        })

        cy.get('button').contains('Submit').click()
        cy.url().should('include', '/success')
      })
    })
  })

  describe('Metrics Quiz Game', () => {
    beforeEach(() => {
      cy.visit('/metrics')
    })
  
    describe('Initial Layout', () => {
      it('should display main components', () => {
        cy.get('.bg-slate-800').within(() => {
          cy.contains('Metrics').should('be.visible')
          cy.contains('totalTestCases: 200').should('be.visible')
          cy.contains('executedTestCases: 160').should('be.visible')
        })

        cy.get('.bg-blue-50').within(() => {
          cy.contains('Metrics Quiz').should('be.visible')
          cy.contains('Q1').should('be.visible')
          cy.get('input[type="number"]').should('be.visible')
        })
      })
    })
  
    describe('Metrics Panel Interaction', () => {
      it('should show metric descriptions in modal', () => {
        cy.contains('totalTestCases').click()
        cy.contains('The total number of test cases designed for this project')
          .should('be.visible')

        cy.contains('Close').click()
        cy.contains('The total number of test cases designed for this project')
          .should('not.exist')
      })
    })
  
    describe('Quiz Navigation', () => {
      it('should navigate between questions', () => {
        cy.contains('1. What is the percentage of test cases executed?')
          .should('be.visible')
  
        cy.contains('Q2').click()
        cy.contains('2. What is the percentage of test cases passed?')
          .should('be.visible')

        cy.contains('Next').click()
        cy.contains('3. What is the defect density?')
          .should('be.visible')
      })
    })
  
    describe('Formula Display', () => {
      it('should toggle formula visibility', () => {
        cy.get('.katex').should('be.visible')

        cy.contains('Hide Formula').click()
        cy.get('.katex').should('not.exist')
  
        cy.contains('Show Formula').click()
        cy.get('.katex').should('be.visible')
      })
    })
  
    describe('Answer Validation', () => {
      it('should validate correct answers', () => {
        cy.get('input[type="number"]').type('80')
        cy.contains('Submit').click()
        cy.contains('Correct!').should('be.visible')
      })
  
      it('should validate incorrect answers', () => {
        cy.get('input[type="number"]').type('50')
        cy.contains('Submit').click()
        cy.contains('Incorrect.').should('be.visible')
      })
  
      it('should clear answers when navigating', () => {
        cy.get('input[type="number"]').type('80')
        cy.contains('Submit').click()
        cy.contains('Next').click()
        cy.get('input[type="number"]').should('have.value', '')
      })
    })
  
    describe('Complete Quiz Flow', () => {
      it('should complete all questions', () => {
        const answers = ['80', '87.5', '0.16', '88', '12', '0.63', '0.88', '4.5', '35', '5']
        
        answers.forEach((answer, index) => {
          if (index > 0) {
            cy.contains(`Q${index + 1}`).click()
          }
          cy.get('input[type="number"]').type(answer)
          cy.contains('Submit').click()
          if (index < answers.length - 1) {
            cy.contains('Next').should('be.visible')
          }
        })
  
        cy.contains('Go to Next Section').should('be.visible')
      })
    })
  
    describe('Navigation', () => {
      it('should navigate to next section', () => {
        cy.contains('Go to Next Section').click()
        cy.url().should('include', '/morequiza')
      })
    })
  
    describe('Responsive Layout', () => {
      it('should adapt to mobile view', () => {
        cy.viewport('iphone-x')

        cy.get('.flex-col').should('be.visible')

        cy.contains('Metrics').should('be.visible')
        
        cy.get('input[type="number"]').should('be.visible')
      })
    })
  })
})
