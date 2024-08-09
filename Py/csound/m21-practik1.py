import music21 as m21

m21.environment.set("musicxmlPath", "/usr/bin/musescore")
m21.environment.set("musescoreDirectPNGPath", "/usr/bin/musescore")

def main():
    myscaleplot = []
    myscale = m21.scale.MixolydianScale('B')
    for i in myscale.getPitches():
        print(i):wq

        myscaleplot.append(i)

    myscale.show()
    m = m21.chord.





if __name__ == "__main__": 
    main()
