import speech_recognition as sr
import sys
r = sr.Recognizer()

with sr.Microphone() as source:
    r.adjust_for_ambient_noise(source)

    print("Please say something")

    audio = r.listen(source)

    print("Please wait .... ")

    try:
        print("You said \n" + r.recognize_google(audio, language = 'en-US'))


    except Exception as e:
        print("Error :  " + str(e))
sys.stdout.flush()